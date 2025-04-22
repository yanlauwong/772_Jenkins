pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                // Simulate a build (e.g., transpile, bundle)
                bat 'echo "Build complete."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Simulate deployment (could be rsync, Docker push, etc.)
                bat 'echo "Deployed successfully!"'
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
