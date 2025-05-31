db = db.getSiblingDB('yourDatabase');
db.createUser({
    user: 'yourUsername',
    pwd: 'yourPassword',
    roles: [
        { role: 'readWrite', db: 'yourDatabase' }
    ]
});