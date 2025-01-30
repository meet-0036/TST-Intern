export default function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  // function CoreConcept(prps) {  // pass dynamic ui info by props
  //   return (
  //     <li>
  //       <img src={prps.image} alt={prps.title} />
  //       <h3>{prps.title}</h3>
  //       <p>{prps.description}</p>
  //     </li>
  //   );
  // }