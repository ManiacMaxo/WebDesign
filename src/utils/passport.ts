import bcrypt from 'bcrypt'
import passport from 'passport-local'
import { getConnection } from 'typeorm'
import { User } from '../entity'
const LocalStrategy = passport.Strategy

export const initialize = (passport: passport) => {
    const authenticate = (email: string, password: string, done) => {
        getConnection()
            .getRepository(User)
            .findOne({ email })
            .then((user) => {
                if (!user) {
                    return done(null, false, { message: 'User not found' })
                }
                bcrypt
                    .compare(password, user.password)
                    .then((result) => {
                        if (result) {
                            return done(null, user)
                        } else {
                            return done(null, false, {
                                message: 'Invalid password'
                            })
                        }
                    })
                    .catch((e) => {
                        return done(e)
                    })
            })
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticate))
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        getConnection()
            .getRepository(User)
            .findOne(id)
            .then((user) => {
                done(null, user)
            })
    })
}
