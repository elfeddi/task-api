# task-api

API REST de gestion de tâches

## Stack
- Langage : nodejs
- CI/CD : Tekton → Harbor → ArgoCD
- Plateforme : DxP

## Démarrage rapide
```bash
# Cloner le repo
git clone <repo-url>
cd task-api

# Lancer en local
docker build -t task-api .
docker run -p 8080:8080 task-api
```
