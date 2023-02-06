const productData = [
    {
        id: 1,
        name: "SteelSeries Pro",
        image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 220,
        content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic.',
        like: 0,
        view: 0,
    },
    {
        id: 2,
        name: "Razer Wireless",
        image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 169,
        content: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) ',
        like: 0,
        view: 0,
    },
    {
        id: 3,
        name: "Skullcandy",
        image:  "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        content: 'the prevailing view assumed lorem ipsum was born as a nonsense text. Its not Latin, though it looks like it',
        like: 0,
        view: 0,
    },
    {
        id: 4,
        name: "Logitech Headset",
        image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        like: 3,
        content: 'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind it',
        view: 3,
    },
    {
        id: 5,
        name: "Bose EarBuds",
        image:  "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        content: 'McClintocks eye for detail certainly helped narrow the whereabouts of lorem ipsums origin',
        like: 2,
        view: 2,
    },
    {
        id: 6,
        name: "Beyerdynamic PRO",
        image:  "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        content: 'Its difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s.',
        like: 3,
        view: 3,
    },
    {
        id: 7,
        name: "JBL Wireless",
        image:  "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        content: 'someone tracked down a 1914 Latin edition of De Finibus which challenges McClintocks',
        like: 4,
        view: 4,
    },
    {
        id: 8,
        name: "Beats Wireless",
        content: 'One brave soul did take a stab at translating the almost-not-quite-Latin. According to The Guardian',
        image:  "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        like: 0,
        view: 0,
    },
    {
        id: 9,
        name: "Jabra Wireless",
        image:  "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        content: 'The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero',
        like: 0,
        view: 0,
    },
    {
        id: 10,
        name: "Anker Wireless",
        image:  "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&dpr=1&q=70",
        price: 170,
        content: 'Lorem ipsum is so ubiquitous because it is so versatile. Select how many paragraphs you want, copy, paste.',
        like: 0,
        view: 0,
    },

];
export default productData;