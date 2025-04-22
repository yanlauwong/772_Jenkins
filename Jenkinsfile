pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                // Simulate a build (e.g., transpile, bundle)
                sh 'echo "Build complete."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Simulate deployment (could be rsync, Docker push, etc.)
                sh 'echo "Deployed successfully!"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
