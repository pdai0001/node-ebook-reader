const env = require('./env')

let resUrl
let mp3FilePath
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
  resUrl = 'http://192.168.2.134:8081'
  mp3FilePath = 'E:/nginx-1.17.4/resource/mp3'
  dbHost = 'localhost'
  dbUser = 'root'
  dbPwd = ''
} else if (env === 'prod') {
  resUrl = 'http://122.51.93.40'
  mp3FilePath = '/root/nginx/upload/mp3'
  dbHost = '122.51.93.40'
  dbUser = 'root'
  dbPwd = 'Abcd123456.'
}

const category = [
  'Biomedicine',
  'BusinessandManagement',
  'ComputerScience',
  'EarthSciences',
  'Economics',
  'Engineering',
  'Education',
  'Environment',
  'Geography',
  'History',
  'Laws',
  'LifeSciences',
  'Literature',
  'SocialSciences',
  'MaterialsScience',
  'Mathematics',
  'MedicineAndPublicHealth',
  'Philosophy',
  'Physics',
  'PoliticalScienceAndInternationalRelations',
  'Psychology',
  'Statistics'
]

module.exports = {
  resUrl,
  category,
  mp3FilePath,
  dbHost,
  dbUser,
  dbPwd
}
