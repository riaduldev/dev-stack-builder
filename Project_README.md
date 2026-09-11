1. Name of your project: my project name is dev-stack-builder.

2. A little description: this is a dev-stack project for developer choosing , skill selected which stack is in your choose need to webdev. this project is modern responsive development stack , developer explore technology wich is need for a developer.

3. Technology that you use: i used technology in this projects: vite, react, typescript, tailwind css, daisyui, react icon, react toastyfy, api/json data.

4. 3 features about your project: Explore Technology Explore, responsive ui, Build in your stack,
   a developer explore modern technology which is need to development in a intractive website create .
   the application fully responsive for mobile , tablet and desktop versions, toast notification are showed stack add, remove and remove all .

Questions answer:

1.  What is JSX, and why is it used in React?
    ans: jsx holo javascript xml , jsx html syntax facture. react a jsx use kora hoy html and javascript logic ek jaygay lekha jay.

2.  What is the difference between props and state?
    props: prop parent component a define kora hoy, parent component theke data pathano jay props diye , child component onno child component a data pathate pare na . child component theke props change kora jay na . props control hoy parent component theke.
    state: state component er niche data manege kore , state change kora jay setter diye. component state mange kore.

3.  What does the useState hook do, and where did you use it in this project?
    ans: useState react component er modde changeable data update korar jonno use kora hoy.

4.  What does the useEffect hook do, and why did you need it to load the JSON data?
    ans: useEffect holo sideEffect eta muloto api call , timer , evenlistener er jonno use kora hoy.

5.  Why does every item in a .map() list need a unique key prop?
    ans: react jokhon data render kore tokhon kon data konta seta thik rakhar jonno unique key dorkar hoy.
    jokhon list update hoy tokhon react bujhte pare data change hoyse r ei jonno unique key dorkar, data thik rakhar jonno.

6.  What is conditional rendering? Show one place you used it (example: the empty stack message).
    ans: conditional rendering holo ekta condition er upor depend kore defferent ui website a dekhano.
    example: {stack.length === 0 ? (
    <div className="flex min-h-52 flex-col items-center justify-center text-center">
    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
    🧩
    </div>

              <h3 className="font-semibold text-gray-700">
                Your stack is empty
              </h3>

              <p className="mt-1 max-w-60 text-sm text-gray-400">
                Add technologies from the list to build your development stack.
              </p>
            </div>

7.  How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    ans: parent theke child a data pathano hoy props diye , child direct parent a data pathate pare na.
    call back prop use kore child theke parent a information pathano jay.
