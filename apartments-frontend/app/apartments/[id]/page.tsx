'use client';
import { useParams } from 'next/navigation';
import BackButton from '@/shared/components/BackButton';
import useApartment from '@/modules/apartments/hooks/useApartment';
import ApartmentInfo from '@/modules/apartments/components/ApartmentInfo';


export default function ApartmentDetails() {
  //get id from url params
  const params = useParams();
  const id = Number(params?.id);

  //fetch apartment data
  const { apt, loading, error } = useApartment(id);


  if (loading) return <div>Loading...</div>;

  //handle error state
  if (error)
    return (
      <div className="alert alert-danger">
        {error}
        <BackButton/>
      </div>
    );
  //handle not found state
  if (!apt)
    return (
      <div className="alert alert-warning">
        Apartment not found.
        <BackButton />
      </div>
    );
  
  //render apartment info
  return (
 <ApartmentInfo apt={apt} />
  );
}
