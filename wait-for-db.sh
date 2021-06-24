until mysqladmin ping -h database -u ${MYSQL_USER} -p ${MYSQL_PASSWORD}; do 
        echo "still waiting for mysql ${MYSQL_USER} ${MYSQL_PASSWORD}"; sleep 1; done

# exec node ./db/scripts/generateSequelizeCLIConfig.js
# exec node_modules/sequelize-cli/bin/sequelize db:migrate
exec node_modules/sequelize-cli/bin/sequelize db:seed:all
exec npm start