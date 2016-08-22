
To run the ui using s2i then run:

```

 oc new-build openshift/nodejs-010-centos7~https://github.com/zmhassan/metadata-registry-web-ui.git

 ```


Required Environment Variables:

```

METAREGISTRY_SERVICE_HOST

```
