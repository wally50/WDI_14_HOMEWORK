
React password strength estimator

A large number of user accounts has been hacked recently on goodfoodhunting revealed a interesting trend. pudding was the most commonly used password for good food hunters.

In order to encourage users to choose a less sloppy password we will implement a password checker on the client side and give them suggestions as the password is being entered.

https://xkcd.com/936/

A lot of sites force users to choose passwords with a mixture of numbers and captial letters and punctuation. It annoying hard to remember and its not even that secure anyway as demostrated in the above comic. But we will do it anyway.

here's how it's gonna work
1 point for lower case letters
1 point for upper case letters
1 point for 8 characters or more
1 point for numbers
1 point for non alpha numeric characters
getting 1 point means your password is weak and 5 points means your password will be a pain in the butt to remember

create a react component that includes a input box and a word underneath to tell you how weak your password is as you type



# webpack react hot reload starter

All you need, none you don't.

Sensible starter with hot reload to try react with webpack 3 that deploys straight to github pages.

## Based on

1. Bundler: [Webpack](http://webpack.github.io/docs/), [Babel](https://babeljs.io)
2. Language: [ES2015](https://babeljs.io/docs/learn-es2015/)
3. Library: [React](https://reactjs.org/), [Sass](http://sass-lang.com/), [Mocha](https://mochajs.org)

## Usage

1. clone this repo
```
git clone THIS_GIT_REPO_URL
```

2. install dependencies using npm or yarn
```
npm install
```
or
```
yarn install
```

3. start dev server and start coding in `/app`
```
npm start
```

## build and deploy with github pages

Github pages support hosting your site in a docs directory within your repo. Simply run the following command to build your site into docs directory and update the source setting on github.

```
npm run build
```

## run tests in `/test`
```
npm test
```
