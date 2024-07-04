#!/bin/sh


#name of image
name=kelar/server-side-app


#Here check we alredy have image on pc or not

#if not creating new one
if [ $(docker images | grep -c "kelar/server-side-app") -gt 0 ]; then
    echo "Image exist so delete and build new one"
    
    #What user want
    while true; do
        read -p "So delete exsist image Y/N: " del

        if [ "$del" = "Y" ] || [ "$del" = "y" ]; then 
            echo "deleting"
            docker rmi $name
            break

        elif [ "$del" = "N" ] || [ "$del" = "n" ]; then
            echo "we stopping"
            exit

        else 
            echo "sorry again"
        fi
    done


#or dont exsist
else
    echo 'Builded image dosen`t exsist so created new one'
fi

#Build our image
docker build -t $name .

echo ""
echo "Build complete"
echo ""


#start container from image or not
while true; do
    read -p "So start that image Y/N: " run

    if [ "$run" = "Y" ] || [ "$run" = "y" ]; then 
        echo "Running"
        read -p "pls give some arguments to run example --rm -it: " arguments
        docker run $arguments $name
        break

    elif [ "$run" = "N" ] || [ "$run" = "n" ]; then
        echo "we stopping"
        exit

    else 
        echo "sorry again"
    fi
done




