#!/bin/sh
VERSION="1.0.0-SNAPSHOT"
MAINTAINERS="Zak Hassan; Jonathan Halliday;"
COMPONENT="metadata-registry-web-ui"


echo "Pulling Down Images"
echo " "
echo "    __  __________________    ____  ___  _________       ____  _______________________________ __  __"
echo "   /  |/  / ____/_  __/   |  / __ \/   |/_  __/   |     / __ \/ ____/ ____/  _/ ___/_  __/ __ \\ \/ /"
echo "  / /|_/ / __/   / / / /| | / / / / /| | / / / /| |    / /_/ / __/ / / __ / / \__ \ / / / /_/ / \  / "
echo " / /  / / /___  / / / ___ |/ /_/ / ___ |/ / / ___ |   / _, _/ /___/ /_/ // / ___/ // / / _, _/  / /  "
echo "/_/  /_/_____/ /_/ /_/  |_/_____/_/  |_/_/ /_/  |_|  /_/ |_/_____/\____/___//____//_/ /_/ |_|  /_/   "
echo " "
echo " "
echo "Maintainers: $MAINTAINERS"
echo " "
echo "Version: $VERSION"
echo " "
echo "Component: $COMPONENT"
echo " "
echo "RUNNING INSIDE A CONTAINER"
echo " <ctrl-c> to exit"

docker run -it -p 8080:8080 metadatapoc/metadata-registry-web-ui
