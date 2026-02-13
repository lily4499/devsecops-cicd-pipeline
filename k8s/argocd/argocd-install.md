# Argo CD install (quick)

kubectl create namespace argocd

kubectl apply -n argocd \
  -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl get pods -n argocd

# UI access:
kubectl -n argocd port-forward svc/argocd-server 8085:443
