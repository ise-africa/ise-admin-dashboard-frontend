pipeline {
	agent any

	environment {
		DOCKER_REGISTRY = 'docker.iseschool.co'
		DOCKER_IMAGE_NAME = 'ise-admin-dashboard'
		BUILD_NAME = 'prod'
		CONTAINER_NAME = 'ise-admin-dashboard'
		TARGET_SERVER = '10.106.0.4'
		SSH_CREDENTIALS_ID = 'ssh-droplet-prod'
		NEXUS_CREDENTIALS_ID = 'ise-nexus-credential'
		ENV_FILE_ID = '6e9f6207-e99d-4a12-8657-8ff88a1321c2'
		SSH_USER = 'jenkins'
	}
  
	stages {
	        stage('Copy .env file') {
	            steps {
	                script {
	                    configFileProvider([configFile(fileId: ENV_FILE_ID, targetLocation: '.env')]) {
	                        echo '=== env file copied ==='
	                    }
	                }
	            }
	        }

		stage('Build Docker Image') {
			steps {
				echo '=== Building docker image for ise-backend ==='
				script {
					def version = env.BUILD_NUMBER ?: 'latest'
					sh "docker build -t $DOCKER_IMAGE_NAME:$BUILD_NAME-$version -f Dockerfile ."
				}
			}
		}

		stage('Push to Nexus') {
			steps {
				echo '=== Pushing ise-backend Docker image to Private Nexus repository ==='
				script {
					withCredentials([usernamePassword(credentialsId: NEXUS_CREDENTIALS_ID, passwordVariable: 'NEXUS_PASSWORD', usernameVariable: 'NEXUS_USERNAME')]) {
						sh "docker login -u $NEXUS_USERNAME -p $NEXUS_PASSWORD $DOCKER_REGISTRY"
						sh "docker tag $DOCKER_IMAGE_NAME:$BUILD_NAME-${env.BUILD_NUMBER} $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$BUILD_NAME-${env.BUILD_NUMBER}"
						sh "docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$BUILD_NAME-${env.BUILD_NUMBER}"
					}
				}
			}
		}

	stage('Deploy to Target Server') {
		steps {
			echo "=== Deploying ise-backend container to staging server ${TARGET_SERVER} ==="
				script {
					withCredentials([sshUserPrivateKey(credentialsId: SSH_CREDENTIALS_ID, keyFileVariable: 'SSH_PRIVATE_KEY_FILE', passphraseVariable: 'SSH_PASSPHRASE')]) {
							sshagent(credentials: [SSH_CREDENTIALS_ID]) {
					sh """
						ssh -o StrictHostKeyChecking=no ${SSH_USER}@$TARGET_SERVER 'docker ps -q --filter "name=$CONTAINER_NAME" | xargs -r docker stop'
						ssh -o StrictHostKeyChecking=no ${SSH_USER}@$TARGET_SERVER 'docker ps -a -q --filter "name=$CONTAINER_NAME" | xargs -r docker rm'
						ssh -o StrictHostKeyChecking=no ${SSH_USER}@$TARGET_SERVER "docker images -q --filter=reference=$DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$BUILD_NAME-* | xargs -r docker rmi --force"
						ssh -o StrictHostKeyChecking=no ${SSH_USER}@$TARGET_SERVER 'docker pull $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$BUILD_NAME-${env.BUILD_NUMBER}'
						ssh -o StrictHostKeyChecking=no ${SSH_USER}@$TARGET_SERVER 'docker run -d -p 3003:3000 --name $CONTAINER_NAME $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$BUILD_NAME-${env.BUILD_NUMBER}'
					"""
					}
				}
			}
		}
	}

	stage('Final Result') {
		steps {
			echo 'Deployment Complete'
			}
		}
	}
}
