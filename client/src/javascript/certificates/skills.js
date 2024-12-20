const skillComponent = (data) => {
    const {name, imgSrc} = data;

    return `<li>
                <abbr title=${name}>
                <img src=${imgSrc} alt=${name} />
                </abbr>
              </li>`;
}

export default skillComponent;

