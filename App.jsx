import React from 'react';
import Card from './components/Card.jsx';
import SkillCard from './components/SkillCard.jsx';
import TechnologyCard from './components/TechnologyCard.jsx';

const App = () => {
  return (
    <div>
      <Card image="2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg" name="Рябков Александр" />
      <div className="skills">
      \\\вашими компетенциями
        <SkillCard skill="HTML" />
        <SkillCard skill="MySQL" />
        <SkillCard skill="CSS" />
      </div>
      \\\технологиями компетенциями, который вы бы хотели изучить
      <div className="technologies">
        <TechnologyCard technology="Node.js" />
        <TechnologyCard technology="Express.js" />
        <TechnologyCard technology="GraphQL" />
        <TechnologyCard technology="Next.js" />
        <TechnologyCard technology="TypeScript" />
        <TechnologyCard technology="Docker" />
      </div>
    </div>
  );
};

export default App;
