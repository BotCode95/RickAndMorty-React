import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Buttons/Button';
import { Title } from '../components/Layout/Title';
import { Navegation } from '../navegation/Navegation';

export const NoMatch = () => {

  let navigate = useNavigate();
  const goBack = () => {
    navigate('/')
  }
  return (
      <>
        <div className="subtitle">
          <Title title={"Error 404"}/>
          <h1>Page Not Found</h1>
          <Button className="btn btn-warning" onClick={goBack}>Go to home</Button>
        </div>
      </>
  );
};
