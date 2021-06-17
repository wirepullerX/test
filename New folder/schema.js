import {buildSchema} from 'qraphql'
const schema = buildSchema(`
    type Coures {
        id: ID 
        coureName: String
        category: String
        price : Int
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssist]
    }
    type TeachingAssist{
        firstName: String
        lastName : String
        experience : Int
    }
    enum Stack{
        WEB
        MOBILE
        OTHER
    }
    type Query {
        getCourse(id: ID): Course
    }
    input CourseInput {
        id: ID 
        coureName: String!
        category: String
        price : Int!
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssist]
    }

    input TeachingAssistInput{
        firstName: String
        lastName : String
        experience : Int
    }

    type Mutation {
        createCourse(input: CouresInput): Course
    }

`)
export default schema;