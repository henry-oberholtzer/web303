import { Sampler } from 'tone';
import C1 from '../assets/303_C1.wav';
import { useEffect, useRef, useState } from 'react';

const AcidVoice = () => {
  const [isLoaded, setLoaded] = useState(false);
  const sampler = useRef<Sampler>(new Sampler());
  
  useEffect(() => {
    sampler.current = new Sampler(
      { C1 },
      {
        onload: () => {
          setLoaded(true);
        }
      }
    ).toDestination()
  }, [])

  const handleClick = () => sampler.current.triggerAttackRelease("A1", 0.5);

  return (
    <div>
      <button disabled={!isLoaded} onClick={handleClick}>
        start
      </button>
    </div>
  )
}

export { AcidVoice }
