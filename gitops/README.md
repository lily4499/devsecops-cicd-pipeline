# GitOps folder

This folder is the GitOps "source of truth" for Argo CD.

Jenkins updates the image line in:
- gitops/myapp/deployment.yaml

Argo CD syncs this folder into the Kubernetes cluster.
