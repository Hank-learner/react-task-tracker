pipeline {
  agent any
  tools {nodejs "node"}

  stages {


    stage('Build') {
      steps {
        sh 'npm clean-install'
        sh 'npm run build'
      }
    }
  }
}
