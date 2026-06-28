import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image


# ── Model Definition ──────────────────────────────────────────────────────────

class Iris(nn.Module):
    def __init__(self, num_classes=1081):
        super(Iris, self).__init__()
        self.num_classes = num_classes
        self.backbone_model = models.convnext_tiny(weights=None)
        for param in self.backbone_model.parameters():
            param.requires_grad = False
        in_features = self.backbone_model.classifier[2].in_features
        self.backbone_model.classifier[2] = nn.Linear(in_features, num_classes)

    def unfreeze_backbone(self):
        for param in self.backbone_model.parameters():
            param.requires_grad = True

    def forward(self, img):
        return self.backbone_model(img)


# ── Setup (runs once at import time) ─────────────────────────────────────────

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

TRANSFORM = transforms.Compose([
    transforms.Resize(236),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225]),
])

_model = None

def load_model(checkpoint_path: str, num_classes: int = 1081):
    """Call once at app startup."""
    global _model
    _model = Iris(num_classes=num_classes)
    state_dict = torch.load(checkpoint_path, map_location=DEVICE)
    if isinstance(state_dict, dict) and "model_state_dict" in state_dict:
        state_dict = state_dict["model_state_dict"]
    _model.load_state_dict(state_dict)
    _model.to(DEVICE)
    _model.eval()


# ── The one function your backend calls ───────────────────────────────────────

def predict(image) -> int:
    """Accepts a file path (str) or a PIL Image."""
    """Returns the predicted class number."""
    img = Image.open(image).convert("RGB") if isinstance(image, str) else image
    tensor = TRANSFORM(img).unsqueeze(0).to(DEVICE)
    with torch.no_grad():
        logits = _model(tensor)
    return logits.argmax(dim=1).item()

