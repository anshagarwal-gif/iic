import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProtectedRoute from '../Components/ProtectedRoute';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const BharatTeams = () => {
  const [registrations, setRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/startups');
        setRegistrations(response.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  const filteredRegistrations = registrations.filter(registration =>
    registration.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />

      <ProtectedRoute correctCode="123456"> {/* Replace "123456" with your actual code */}
        <input
            type="text"
            placeholder="Search by company name"
            className="mb-4 mt-52 ml-4 p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className=" w-11/12  p-4 overflow-x-scroll">

          <h1 className="text-2xl font-bold mb-6">Startup Registrations</h1>

          <table style={{
            borderCollapse: 'collapse',
            width: '100%',
            border: '1px solid black ',
            radius:'5px',
          }} className=' text-center'>
            <thead >
              <tr className=' '>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                  minWidth: 'fit-content'
                }}>Company Name</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Representative Name</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Phone Number</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Email</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Team Members</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Idea</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Is Registered</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Founders</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Operation Time</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Company Type</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Has Team</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Problem Statement</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Unique Product</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Legal Requirements</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Current Stage</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Has Funding</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Funding Details</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Has Awards</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Awards Details</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Target Customers</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Has Prototype</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Has Pilot</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Pilot Evidence</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Runway</th>
                <th style={{
                  border: '1px solid black',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'center',
                  
                }}>Video</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map((registration, index) => (
                
                <tr key={index}>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.companyName}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.representativeName}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.phoneNumber}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.email}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.teamMembers}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.idea}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.isRegistered}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.founders}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.operationTime}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.companyType}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.hasTeam}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.problemStatement}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.uniqueProduct}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.legalRequirements}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.currentStage}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.hasFunding}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.fundingDetails}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.hasAwards}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.awardsDetails}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.targetCustomers}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.hasPrototype}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.hasPilot}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>
                    {registration.pilotEvidence ? (
                      <a
                        href={`http://localhost:5000/${registration.pilotEvidence}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'blue',
                          textDecoration: 'underline'
                        }}
                      >
                        View Evidence
                      </a>
                    ) : (
                      'No Evidence'
                    )}
                  </td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>{registration.runway}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px'
                  }}>
                    {registration.video ? (
                      <a
                        href={`http://localhost:5000/${registration.video}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'blue',
                          textDecoration: 'underline'
                        }}
                      >
                        View Video
                      </a>
                    ) : (
                      'No Video'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProtectedRoute>
      <Footer />
    </>
  );
};

export default BharatTeams;