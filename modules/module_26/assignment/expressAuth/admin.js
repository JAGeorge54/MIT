const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "courso-10521";
const private_key_id = "c3c43be1f426384082842a48b3618a1c55688d4f";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZVUWEe4Zkmt4X\nbZ+QnUsTuQ0zP78j5eSJ4rIURjLRCKKtjIkfOdhvO3KUDJCXi9Ip73pHZaBj5J3Q\nbb5iAPSXu0sl3A7W4GawsrKFFmh8eINJBmujkTTAVUyGLJjgbZXpZIgA09n9OLBR\nRmJThUgr6XsjjiH8YpJ7DPIOSNF6qW0treQ4cw7bxcXk3Nzb0hDDQonPt2yCIz3Q\nLRfdigZk6J+nbggIKaL8gqKZm8nm6nFVaXm9Sz0JWMDOmhiq92KUrtlRi/BlVslV\nHK4VuMaYAsQds7fxwSO5VIdPSksU+h+6zxDCI7clkdrNEEfe156fhvoUeuUBwVSt\n2nRJKc8dAgMBAAECggEAGIoRmJzOSt6QKa61KUdLIypsBuYuWHfr5fdeaak8a8DW\njDDgJxuyXEbm1PPX1jEd3vFBIBkPHL2TVi6iF/wwKPJkGfiIdXIvbRsEQBFwgm8l\nD7RT2Lcd+qQMHbMYel5/bf1VWNCO5BxE95TsmpJLlR+GQg/2t3YtHD1bpdaYk+k3\nLnSZO+2WBGipVyUASbcbx5939hUKSEls+p4XczZAPDyQ+7n1WuMWKv/uhrBJ+JTn\naPC578+jban4WSIfxVT/P6Fjs9k4HpUrtYqMjX/EJrAhEl2AoIIWB7ZOxXrZIUct\n4dwkLPNNTe8FnvFTdqNSyEYUFxp6sUypoWzlzniRoQKBgQDKMZwLE3Mv5+Zv+FC1\nR+YoWsZcOtvKd2ev/8apEnT8jN7o6SWpvbk0pR8/ZjaCloMGGA2M1judzDWqBQIp\n9UOEoD4Cwj8TPycoFndcLU4WHX1cpMfmhCV5q8cWuC8ppR87eyBrMFqBJq54Caz4\nTB81vuloi6ZjILCzT3dKflAKcQKBgQDCIwq9r2t8WIA8ulIBQ8HK4aOFbGoUXAqw\ne++EU16qX6CiJfSsIXKpuSBZ5gP8UxqlDZcE97epwEtTJSja/UvHSgj/7Mu5PPOL\nEK4H/O+SxotRFBQ5phHuRv/8R9bPkgrsCKqt/OZPlNQw0FNG+4UbTrKTGraQaDne\nbCDRR/etbQKBgGOp8HDFNZH3jO7ER4QT3K8nj38GxDAYi1OFkDbmkiOqjHXh9l6k\n1hXNDooBp/zWk979HDC/qMMvVYRo05g6/Pzyv548gTrLdlGcQVl+O29LOe/giWhm\n2tIOiiP4xcaRTcPT/TbYrsPafUVN/6SkYP3tDMArlehmxLKeCP7/JBUBAoGAaMNM\nOox9bn67xQmu0yvjWj5lZczZed8pjY9z826h+ULdhmMBJBpwrBJQ2PJ9WB7olAU/\nZ9jd7ebtPxMgdvyVdhgHv0PjtDSmIHeB0qG2DvjBmaFCQNHTf0glP9jsnNrste7/\nXCDLkEp6L1Vce0Oj0tanGychOdBk2hhzpTw29gkCgYEAsremGNoIp68uMb930YGy\nDPId47VZ6p2yzONJrvRSu9Bdmz+a4VJ9CBSnseTiryY4EQaI021AUZVIt6izuQAm\nn07C3+foX7cMsWhYMkrImjfLvY8adhL34C38ihPVZl7voIZlBFjFqZBKge+MYqIc\ntySGwXz5PDdQI+yAsWDeYxs=\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-w5v38@courso-10521.iam.gserviceaccount.com";
const client_id = "100774469687208847986";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w5v38%40courso-10521.iam.gserviceaccount.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;