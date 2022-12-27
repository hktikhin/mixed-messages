const authors = ["Tony Robbins", "Dorothy West", "Andrew Jackson", "Albert Einstein", "Ruth Gordo"];
const qualities = ["Courage", "Resilience", "Stillness", "Curiosity", "Creativity", "Impartiality"];
const actions = ["Setting goals", "Making plans", "Talking to others", "Learning to live", "Helping others", "Keep Moving"];
const messageComponents = {
    authors,
    qualities,
    actions
}

const sampleFromArray = (arr) => {
    const randomIdx = Math.floor(Math.random()*arr.length);
    return arr[randomIdx];
}

const generateQuote = ({author, quality, action}) => {
    const quoteTempletes = [
        `“ ${action} is the secret to a compelling future. ” — ${author}`,
        `“ To know how much there is to know is the beginning of ${action}. ” — ${author}`,
        `“ ${action} is the first step in turning the invisible into the visible. ” — ${author}`,
        `“ One man with ${quality} makes a majority. ” – ${author}`,
        `“ Life is like riding a bicycle. To keep your balance you must ${action}. ” — ${author}`,
        `“ ${quality} is like a muscle. We strengthen it by use. ” — ${author}`
    ];
    return sampleFromArray(quoteTempletes);
}

const main = (numQuotes) => {
    for (let i=1; i<=numQuotes; i++){
        const messageKeyWords = {
            author: sampleFromArray(messageComponents.authors),
            quality: sampleFromArray(messageComponents.qualities),
            action: sampleFromArray(messageComponents.actions),
        };
        const quote = generateQuote(messageKeyWords);
        console.log(`${i}. ${quote}`);
    }
}


// test
main(10)
/* Example output
1. “ Helping others is the secret to a compelling future. ” — Albert Einstein
2. “ One man with Resilience makes a majority. ” – Dorothy West
3. “ Keep Moving is the secret to a compelling future. ” — Tony Robbins
4. “ To know how much there is to know is the beginning of Making plans. ” — Albert Einstein
5. “ One man with Curiosity makes a majority. ” – Andrew Jackson
6. “ Resilience is like a muscle. We strengthen it by use. ” — Albert Einstein
7. “ To know how much there is to know is the beginning of Keep Moving. ” — Ruth Gordo
8. “ Helping others is the first step in turning the invisible into the visible. ” — Tony Robbins
9. “ Helping others is the secret to a compelling future. ” — Dorothy West
10. “ One man with Stillness makes a majority. ” – Tony Robbins
*/ 