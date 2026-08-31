pipeline {

    agent any

    environment {
        ENV = 'qa'
        CI = 'true'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {

        always {
            // Keep reports and failure evidence
            archiveArtifacts artifacts:
                'playwright-report/**/*, test-results/**/*',
                allowEmptyArchive: true

            // Publish HTML report
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }

        success {
            echo 'OrangeHRM tests passed successfully.'
        }

        failure {
            echo 'OrangeHRM tests failed. Check screenshots, videos, logs and reports.'
        }
    }
}

