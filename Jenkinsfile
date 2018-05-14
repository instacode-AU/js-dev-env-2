pipeline {
  agent {
    node {
      label 'JS_ENV_Build'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
  environment {
    stage = 'build'
  }
}