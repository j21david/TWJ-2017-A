# Comandos docker

## docker ps

Este comando lista los contenedores que estan corriendo

        >> docker ps

## docker ps -a 

Este comando listaba **TODOS** los contenedores que estan instalados

        >> docker ps -a
        
## docker stop `ìd` o `nombre`

Este comandos **detienes** los contenedores que este corriendo

        >> docker stop 12mdasdasd mi contenedor
        >> docker stop 12
        
## docker start `ìd` o `nombre`
                                                    
Este comando **levanta** los contenedores detenidos
                                                   
        >> docker start 12mdasdasd mi contenedor
        >> docker start 12ç
        
## docker rm `ìd` o `nombre`

Este comando elimina los o el contenedor que esten detenido.

        >> docker rm 12mMC232udD micontenedor
        >> docker rm 12
        >> docker rm m
        >> docker rm 12 mi
        

        
## MYSQL

Para utilizar docker con mysql vamos a utilizar el siguiente comando:

        >> docker run --name adrian -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=adrian -e MYSQL_USER=adrian -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql