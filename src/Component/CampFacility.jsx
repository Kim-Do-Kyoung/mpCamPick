import { faBasketball, faBolt, faBullseye, faCartShopping, faDumbbell, faFire, faGamepad, faHotTub, faTree, faWaterLadder, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CampFacility(data){
    const selectFacility = [
        {name:'전기',icon:<FontAwesomeIcon icon={faBolt} />},
        {name:'무선인터넷',icon:<FontAwesomeIcon icon={faWifi} />},
        {name:'장작판매',icon:<FontAwesomeIcon icon={faFire} />},
        {name:'온수',icon:<FontAwesomeIcon icon={faHotTub } />},
        {name:'트렘폴린',icon:<FontAwesomeIcon icon={faBullseye } />},
        {name:'물놀이장',icon:<FontAwesomeIcon icon={faWaterLadder} />},
        {name:'놀이터',icon:<FontAwesomeIcon icon={faGamepad} />},
        {name:'산책로',icon:<FontAwesomeIcon icon={faTree} />},
        {name:'운동장',icon:<FontAwesomeIcon icon={faBasketball} />},
        {name:'운동시설',icon:<FontAwesomeIcon icon={faDumbbell} />},
        {name:'마트.편의점',icon:<FontAwesomeIcon icon={faCartShopping} />},
    ]
    const facility = selectFacility.find((fac) => fac.name === data);

    if (facility) {
        return (
          <>
            <span>{facility.icon}</span>
            <p>{data}</p>
          </>
        );
      } else {
        return (
            <p>{data}</p>
        )
      }
}

export default CampFacility;