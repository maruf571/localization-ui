pipeline {

    agent none

    stages {

        stage('Fetch dependencies') {
            agent {
                docker 'circleci/node:9.3-stretch-browsers'
            }
            steps {
                sh 'yarn'
                stash includes: 'node_modules/', name: 'node_modules'
            }
        }

        stage('Compile') {
            agent {
                docker 'circleci/node:9.3-stretch-browsers'
            }
            steps {
                unstash 'node_modules'
                sh 'yarn build:prod'
                stash includes: 'dist/', name: 'dist'
            }
        }

        stage('Build and Push Docker Image') {
        agent any
            environment {
                DOCKER_PASSWORD = credentials('docker-password')
            }
            steps {
                unstash 'dist'
                sh 'docker build -t maruf571/localization-ui:1.0.1 .'
                sh 'docker login -u maruf571 -p $DOCKER_PASSWORD docker.io'
                sh 'docker push $DOCKER_PUSH_URL/localization-ui:1.0.0'
            }
        }
        
    }
}
