pipeline {
   agent any

   tools {
      // Install the Maven version configured as "M3" and add it to the path.
      nodejs '13.1.0'
   }

   stages {
   
      stage('Install Dependencies') {
         steps {
            // Get some code from a GitHub repository
            sh 'npm install'
            
         }
      }
      
      stage('Build Final Project') {
         steps {
            // Get some code from a GitHub repository
            sh 'npm run build'
            
         }
      }
   }
}
