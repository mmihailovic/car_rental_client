export async function loadVehicles(setVehicles) {
    await fetch("http://localhost:8083/rental-service/api/vehicle", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({id:json.content[i].id,type:json.content[i].type.name,model:json.content[i].model});
            }
            setVehicles(niz);

            return json.content;
          });
        }
      });
  }

  export async function loadVehiclesForType(id, setVehicles) {
    await fetch("http://localhost:8083/rental-service/api/vehicle/"+id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({id:json.content[i].id,type:json.content[i].type.name,model:json.content[i].model});
            }
            setVehicles(niz);
            console.log(niz);

            return json.content;
          });
        }
      });
  }

  export async function addVehicle(model,typeid) {
  fetch("http://localhost:8083/rental-service/api/vehicle", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
    },

    body: JSON.stringify({ model, typeid }),
  })
  console.log(typeid);
  console.log(model);
  
  }

  export async function addCompany(title,description) {
    fetch("http://localhost:8083/rental-service/api/company", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
  
      body: JSON.stringify({ title, description }),
    })
    
    }

  export async function deleteVehicle(id) {
  fetch("http://localhost:8083/rental-service/api/vehicle/" + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
    },
  })
  
  }

  export async function loadVehicleTypes(setVehicleTypes) {
    await fetch("http://localhost:8083/rental-service/api/vehicletype", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({id:json.content[i].id,name:json.content[i].name});
            }
            setVehicleTypes(niz);

            return json.content;
          });
        }
      });
  }

  export async function loadOverviews(setOverviews) {
    await fetch("http://localhost:8083/rental-service/api/overview", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({id:json.content[i].id,
                  grade:json.content[i].grade,
                comment:json.content[i].comment,
              company:json.content[i].company.title});
            }
            setOverviews(niz);
            console.log(json.content);

            return json.content;
          });
        }
      });
  }

  export async function loadCompanyOverviews(setOverviews) {
    await fetch("http://localhost:8083/rental-service/api/overview/companies", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({id:json.content[i].id,
                  title:json.content[i].title,
                desc:json.content[i].description,
              grade:json.content[i].prosek});
            }
            setOverviews(niz);
            console.log(json.content);

            return json.content;
          });
        }
      });
  }

  export async function addVehicleType(name) {
    fetch("http://localhost:8083/rental-service/api/vehicletype", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
  
      body: JSON.stringify({ name }),
    })
  }
  export async function deleteVehicleType(id) {
    fetch("http://localhost:8083/rental-service/api/vehicletype/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    
  }

  export async function loadCatalog(from, to, setCatalog) {
    await fetch("http://localhost:8083/rental-service/api/catalog", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
      body: JSON.stringify({from,to})
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            console.log(json.content);
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({vehicleid:json.content[i].vehicle.id,companyid:json.content[i].company.id, type:json.content[i].vehicle.type.name,model:json.content[i].vehicle.model,company:json.content[i].company.title, price:json.content[i].price});
            }
            setCatalog(niz);

            return json.content;
          });
        }
      });
  }

  export async function loadReservationsForUser(id,setReservations) {
    await fetch("http://localhost:8083/rental-service/api/reservation/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      }
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            console.log(json.content);
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({
                  id:json.content[i].id,
                  from:json.content[i].from,
                  to:json.content[i].to, 
                  type:json.content[i].company_vehicle.vehicle.type.name,
                  model:json.content[i].company_vehicle.vehicle.model,
                  company:json.content[i].company_vehicle.company.title, 
                  price:json.content[i].price});
            }
            setReservations(niz);

            return json.content;
          });
        }
      });
  }
  export async function addReservation(vehicleid,companyid,from,to) {
    console.log(vehicleid + " :" + companyid + ":" + from +":" + to);
    fetch("http://localhost:8083/rental-service/api/reservation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
  
      body: JSON.stringify({ vehicleid,companyid,from,to }),
    })
  }
  export async function deleteReservation(id) {
    fetch("http://localhost:8083/rental-service/api/reservation/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    
  }

  export async function deleteCompanyVehicle(id) {
    fetch("http://localhost:8083/rental-service/api/companyvehicle/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
    })
    
  }

  export async function loadCompany(id,setCompany) {
    await fetch("http://localhost:8083/rental-service/api/company/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      }
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            console.log(json);
            console.log(json.content);
            setCompany({
              id:json.id,
              title:json.title,
              description:json.description});

            return json;
          });
        }
      });
  }
  export async function loadCompanyVehicles(id,setVehicles) {
    await fetch("http://localhost:8083/rental-service/api/companyvehicle/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      }
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            console.log(json.content);
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({
                  id:json.content[i].id,
                  type:json.content[i].vehicle.type.name,
                  model:json.content[i].vehicle.model,
                  number:json.content[i].numberOfVehicle, 
                  price:json.content[i].price});
            }
            setVehicles(niz);
            return json.content;
          });
        }
      });
  }
  export async function loadReservationsForCompany(id,setReservations) {
    await fetch("http://localhost:8083/rental-service/api/reservation/company/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      }
    })
    .then(response => {
      console.log(response);  
      if (response.ok) {
          return response.json().then(json => {
            console.log(json.content);
            const niz = [];
            for(let i = 0;i < json.content.length; i++) {
                niz.push({
                  id:json.content[i].id,
                  from:json.content[i].from,
                  to:json.content[i].to, 
                  type:json.content[i].company_vehicle.vehicle.type.name,
                  model:json.content[i].company_vehicle.vehicle.model,
                  company:json.content[i].company_vehicle.company.title, 
                  price:json.content[i].price});
            }
            setReservations(niz);

            return json.content;
          });
        }
      });
  }
  export async function addCompanyVehicle(companyid,vehicleid,numberOfVehicle,price) {
    console.log(companyid + ":" + vehicleid + ":" + numberOfVehicle + ":" + price);
    fetch("http://localhost:8083/rental-service/api/companyvehicle", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4ifQ.dEuh0NrmaqBXOV5RrlIfUkTcKhXUJK0lf4gc7uanyuTmiTOdSkPEsMfB7CPt1pGOYz7JyVilV3cTs6u4IQtc7Q',
      },
  
      body: JSON.stringify({ companyid,vehicleid,numberOfVehicle,price }),
    })
  }