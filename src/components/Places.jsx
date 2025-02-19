import React from 'react'

const sites = [
    {
  
        title:"INDIA" ,
        description:" India is a land of diversity each state in the country is home to several communities who live in harmony with each other while preserving and upholding their own distinct culture and traditions.",
    },
    {
        
        title:"CHINA" ,
        description:"Tourism in China is a growing industry that is becoming a significant part of the Chinese economy. The rate of tourism has expanded over the last few decades since the beginning of reform and opening-up.",
    },
    {
        title:"SRI LANKA" ,
        description:" Sri Lanka is a popular tourist destination. Tourism is a key industry that attracts international tourists yearly. Foreigners visit Sri Lanka to see nature, wildlife, historical monuments, and indigenous culture. In 2018, tourist arrivals peaked at 2.5 million, who spent a total of US$5.6 billion in the country.",
    },
    {
     
        title:"SINGAPORE" ,
        description:"In Singapore,Tourism has become increasingly important to Singapore’s economy. Singapore’s central location in Southeast Asia and its excellent air-transport facilities have been augmented by massive investments in hotels and shopping centres.",
    },
    

];

const Places = () => {
  return (
    <div className='py-12 bg-gray-100 '>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>Popular Destinations </h2>
             <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {sites.map((sites , index) => (
                  <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                    
                    <div className='p-4'>
                        <h3 className='text-xl font-bold mb-2'>{sites.title}</h3>
                      <p className='text-gray-600'>{sites.description}</p>
                    </div>
                 </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Places