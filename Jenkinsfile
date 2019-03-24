pipeline {

    agent none

    stages {

        stage('Fetch dependencies') {
            agent {
                docker 'node:11'
            }
            steps {
                sh 'yarn'
                stash includes: 'node_modules/', name: 'node_modules'
            }
        }

        stage('Compile') {
            agent {
                docker 'node:11'
            }
            steps {
                unstash 'node_modules'
                sh 'yarn build'
                stash includes: 'dist/', name: 'dist'
            }
        }

        stage('Build and Push Docker Image') {
        agent any
            
            steps {
                 echo '${env.DOCKER_PASSWORD}'
                unstash 'dist'
                sh 'docker build -t maruf571/localization-ui:1.0.0 .'
                sh 'docker login -u maruf571 -p mahmud571 docker.io'
                sh 'docker push maruf571/localization-ui:1.0.0'
            }
        }
        
    }
}
