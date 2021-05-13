###  install

    npm i

### Start dev

    1.Compile from time to time
        npm run dev
    
    2.Restart from time to time
        npm run start:dev

    open http://localhost:9020

### Compile prod

    1.compile
        npm run build
    
    2.Single core startup
        npm start

### pm2 start
    
    1.compile
        npm run build

    2.pm2 Multi core startup
        npm run start:prod

    3.stop 
        npm run stop:prod


### It's a bit of a pit

    Integrated ant style

        1. Open first

            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }

        2. Import ant.less file

            Create a global. Less file and add the following code

                @import '../../../node_modules/antd/dist/antd.less';

        3.Import global.less file in app.js file
        