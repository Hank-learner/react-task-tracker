pipeline {
  agent any
  tools {nodejs "node"}

  stages {
    stage('Git') {
      steps {
       sh 'git pull'
      }
    }

    stage('Build') {
      steps {
        sh 'npm clean-install'
        sh 'npm run build'
      }
    }
  }
}
