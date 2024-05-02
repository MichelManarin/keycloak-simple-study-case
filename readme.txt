
# Reference:
  https://rchaussetech.medium.com/docker-nodejs-keycloak-protegendo-sua-api-fe8a2d436b36

# Study case
  docker compose -f keycloak-docker-compose.yml up

import realm-export.sjon into your keycloak

http://localhost:3030/auth/realms/TenantTeste/protocol/openid-connect/token

secret:
9cd81fd3-e077-4018-8adb-a2288ff5ebc9

curl -X POST 'http://localhost:3030/auth/realms/TenantTeste/protocol/openid-connect/token' \
 --header 'Content-Type: application/x-www-form-urlencoded' \
 --data-urlencode 'grant_type=password' \
 --data-urlencode 'client_id=backend-teste' \
 --data-urlencode 'client_secret=9cd81fd3-e077-4018-8adb-a2288ff5ebc9' \
 --data-urlencode 'username=user' \
 --data-urlencode 'password=161211'
