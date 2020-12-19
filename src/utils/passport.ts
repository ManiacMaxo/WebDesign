import passport from 'passport-local'
const LocalStrategy = passport.Strategy
import { getConnection } from 'typeorm'
import bcrypt from 'bcrypt'
import { User } from '../entity'

export const initialize = (passport: passport) => {
    const authenticate = (email: string, password: string, done) => {
        getConnection()
            .getRepository(User)
            .findOne({ where: { email } })
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
    passport.serializeUser((user, done) => {})
    passport.deserializeUser((id, done) => {})
}
