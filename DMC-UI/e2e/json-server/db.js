module.exports = {
    projects: [
        {
            "created": 1537004850292,
            "projectType": "SIMPLEST_PROJECT",
            "links": [
                {
                    "rel": "self",
                    "href": "/api/1/project/1.json"
                },
                {
                    "href": "http://localhost:8080/rest/2/project",
                    "rel": "projectsList"
                },
                {
                    "rel": "datasetsList",
                    "href": "http://localhost:8080/rest/2/project/1/dataset"
                }
            ],
            "name": "proj0",
            "projectId": 1
        },
        {
            "projectType": "SIMPLEST_PROJECT",
            "created": 1537004850292,
            "projectId": 2,
            "name": "proj1",
            "links": [
                {
                    "href": "/api/1/project/2.json",
                    "rel": "self"
                },
                {
                    "rel": "projectsList",
                    "href": "http://localhost:8080/rest/2/project"
                },
                {
                    "href": "http://localhost:8080/rest/2/project/2/dataset",
                    "rel": "datasetsList"
                }
            ]
        },
        {
            "created": 1537004850292,
            "projectType": "SIMPLEST_PROJECT",
            "links": [
                {
                    "rel": "self",
                    "href": "/api/1/project/3.json"
                },
                {
                    "rel": "projectsList",
                    "href": "http://localhost:8080/rest/2/project"
                },
                {
                    "href": "http://localhost:8080/rest/2/project/3/dataset",
                    "rel": "datasetsList"
                }
            ],
            "name": "proj2",
            "projectId": 3
        }
    ],
    users: [
        {
            "password": "123",
            "accountId": 2,
            "created": null,
            "email": "admin@admin",
            "links": [
                {
                    "deprecation": null,
                    "title": null,
                    "media": null,
                    "rel": "self",
                    "type": null,
                    "hreflang": null,
                    "href": "http://localhost:8081/rest/user/2"
                },
                {
                    "media": null,
                    "deprecation": null,
                    "title": null,
                    "rel": "accountsList",
                    "type": null,
                    "hreflang": null,
                    "href": "http://localhost:8081/rest/user"
                },
                {
                    "deprecation": null,
                    "title": null,
                    "media": null,
                    "type": null,
                    "rel": "projectsList",
                    "hreflang": null,
                    "href": "http://localhost:8081/rest/2/project/getall"
                }
            ],
            "firstName": "Admin",
            "role": "ADMIN",
            "userName": "admin",
            "lastName": "Admin"
        },
        {
            "password": "123",
            "accountId": 1,
            "userName": "devel",
            "email": "devel@mail.org",
            "firstName": "Devel",
            "lastName": "Oper",
            "created": null,
            "role": "USER",
            "dtoId": 1,
            "_links": {
                "self": {
                    "href": "http://localhost:8081/rest/user/1"
                },
                "getAccount": {
                    "href": "http://localhost:8081/rest/user/1"
                },
                "updateAccount": {
                    "href": "http://localhost:8081/rest/user/1"
                },
                "addAccount": {
                    "href": "http://localhost:8081/rest/user"
                },
                "deleteAccount": {
                    "href": "http://localhost:8081/rest/user/1"
                },
                "getAccountList": {
                    "href": "http://localhost:8081/rest/user/all"
                },
                "getProjectList": {
                    "href": "api/1/project/all.json"
                }
            }
        }
    ]
}