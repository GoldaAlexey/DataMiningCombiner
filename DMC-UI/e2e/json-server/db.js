module.exports = {
    projects: [
        {
            "created": 1537004850292,
            "projectType": "SIMPLEST_PROJECT",
            "links": [
                {
                    "rel": "self",
                    "href": "http://localhost:8081/rest/1/project/1"
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
                    "href": "http://localhost:8081/rest/1/project/2",
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
                    "href": "http://localhost:8081/rest/1/project/3"
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
                    "href": "http://localhost:8081/rest/1/project/all"
                }
            }
        }
    ],
    datasets: [
        {
            "metaDataId": 1,
            "name": "telecom",
            "description": "",
            "attributes": {
                "Total intl minutes": {
                    "name": "Total intl minutes",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total day charge": {
                    "name": "Total day charge",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total day calls": {
                    "name": "Total day calls",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Number vmail messages": {
                    "name": "Number vmail messages",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total night charge": {
                    "name": "Total night charge",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Churn": {
                    "name": "Churn",
                    "type": "NOMINAL",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total night minutes": {
                    "name": "Total night minutes",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total eve calls": {
                    "name": "Total eve calls",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total day minutes": {
                    "name": "Total day minutes",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Customer service calls": {
                    "name": "Customer service calls",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total intl charge": {
                    "name": "Total intl charge",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Area code": {
                    "name": "Area code",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total night calls": {
                    "name": "Total night calls",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "International plan": {
                    "name": "International plan",
                    "type": "NOMINAL",
                    "multiplier": 1.0,
                    "checked": true
                },
                "State": {
                    "name": "State",
                    "type": "NOMINAL",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Account length": {
                    "name": "Account length",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total intl calls": {
                    "name": "Total intl calls",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total eve minutes": {
                    "name": "Total eve minutes",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Total eve charge": {
                    "name": "Total eve charge",
                    "type": "NUMERIC",
                    "multiplier": 1.0,
                    "checked": true
                },
                "Voice mail plan": {
                    "name": "Voice mail plan",
                    "type": "NOMINAL",
                    "multiplier": 1.0,
                    "checked": true
                }
            },
            "dtoId": 1,
            "_links": {
                "self": {
                    "href": "http://localhost:8081/rest/1/project/1/dataset/1"
                },
                "getDataset": {
                    "href": "http://localhost:8081/rest/1/project/1/dataset/1"
                },
                "addDataset": {
                    "href": "http://localhost:8081/rest/1/project/1/dataset"
                },
                "getDatasetList": {
                    "href": "http://localhost:8081/rest/1/project/1/dataset/all"
                },
                "updateDataset": {
                    "href": "http://localhost:8081/rest/1/project/1/dataset"
                },
                "deleteDataset": {
                    "href": "http://localhost:8081/rest/1/project/1/dataset/1"
                }
            }
        }
    ],
    algorithms: [
        {
            "algorithmId": 1,
            "name": "Algorithm 1",
            "description": null,
            "project": null,
            "dataSource": null,
            "srcAttributes": null,
            "dataDestination": null,
            "method": null,
            "dtoId": 1,
            "_links": {
                "self": {
                    "href": "http://localhost:8081/rest/1/project/1/algorithm/1"
                },
                "addAlgorithm": {
                    "href": "http://localhost:8081/rest/1/project/1/algorithm",
                    "type": "POST"
                },
                "getAlgorithm": {
                    "href": "http://localhost:8081/rest/1/project/1/algorithm/1",
                    "type": "GET"
                },
                "getAlgorithmList": {
                    "href": "http://localhost:8081/rest/1/project/1/algorithm/all",
                    "type": "GET"
                },
                "updateAlgorithm": {
                    "href": "http://localhost:8081/rest/1/project/1/algorithm",
                    "type": "PUT"
                },
                "deleteAlgorithm": {
                    "href": "http://localhost:8081/rest/1/project/1/algorithm/1",
                    "type": "DELETE"
                }
            }
        }
    ]
}