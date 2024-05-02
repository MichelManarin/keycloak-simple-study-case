# Reference:
  https://rchaussetech.medium.com/docker-nodejs-keycloak-protegendo-sua-api-fe8a2d436b36

# Study case
  docker compose -f keycloak-docker-compose.yml up

import realm-export.sjon into your keycloak

http://localhost:3030/auth/realms/TenantTeste/protocol/openid-connect/token

secret:
  <Get Secret inside admin keycloak>


curl --location 'http://localhost:3030/auth/realms/TenantTeste/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: connect.sid=s%3AFiBM3DJEsitOP0fCZUubmuhKfeDx1OFt.kJ9MJeS%2FlMKRKFizfOZxNyk9F3SmXk6WsKKWbup8Y8c' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_id=backend-teste' \
--data-urlencode 'client_secret=<Get Secret inside admin keycloak>' \
--data-urlencode 'username=any_user' \
--data-urlencode 'password=any_password'

curl --location 'http://localhost:3000/test/admin' \
--header 'Authorization: Bearer ...

curl --location 'http://localhost:3000/test/user' \
--header 'Authorization: Bearer ...
