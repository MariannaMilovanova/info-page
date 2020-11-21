import styled from 'styled-components';
import photoSrc from '../../static/images/photo.jpeg';
import photo2Src from '../../static/images/photo2.jpg';

export const Photo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(0, 0, 0, 0.85);
  background-image: url(${photoSrc});
  &:hover {
    background-image: url(${photo2Src});
  }
`;

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  height: 250px;
  width: 60%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #220087;
  padding: 20px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 5px 5px 10px;
`;

export const InfoColumn = styled.div`
  display: flex;
  padding: 5px 20px;
  flex-direction: column;
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 16px;
  padding: 8px 5px 2px 10px;
  line-height: 20px;
`;
