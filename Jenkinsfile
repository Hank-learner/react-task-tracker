pipeline {
  agent any
  tools {nodejs "node"}

  stages {
    stage('Git') {
      steps {
       sh 'git clone https://github.com/Hank-learner/react-task-tracker.git'
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
