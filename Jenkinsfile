pipeline {
	environment {
    		def APP_NAME = "petclinicmocha"
    		def GIT_REPO_NAME = "prashanttathe"
    		def DEPLOY_ENV = "dev"
	}
    	agent { dockerfile true }
	stages {
		stage('Initialize') {
			steps {
				echo 'Placeholder.'
				
				sh """
					JOB_NAME=${env.JOB_BASE_NAME}
					rm -rf /var/lib/jenkins/workspace/\$JOB_NAME//allure-results
					cp -R /app/allure-results/ /var/lib/jenkins/workspace/\$JOB_NAME/
				   """				
			}
		}
		
    	}
	post { 
		success { 
		    sh 'echo "Your test execution is done and reports will be avaible at - http://tnt-aks-automator.eastus.cloudapp.azure.com/build/reports/tests/test/index.html" in sometime.'
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}
