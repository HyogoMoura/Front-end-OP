// Funcionario

export async function createFuncionario(funcionario) {
    const uri = `http://localhost:8080/funcionario/create`;

    try {
        const req = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(funcionario)
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.text();
        return response;
    } catch (error) {
        console.error("Erro ao criar funcionário:", error);
        throw error;
    }
}

export async function readFuncionario(id) {
    const uri = `http://localhost:8080/funcionario/${id}`;

    try {
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.json();
        return response;
    } catch (error) {
        console.error("Erro ao ler funcionário:", error);
        throw error;
    }
}

export async function readAllFuncionario() {
    const uri = `http://localhost:8080/funcionario/all`;

    try {
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.json();
        return response;
    } catch (error) {
        console.error("Erro ao ler todos os funcionários:", error);
        throw error;
    }
}

export async function updateFuncionario(id, funcionario) {
    const uri = `http://localhost:8080/funcionario/update/${id}`;

    try {
        const req = await fetch(uri, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(funcionario)
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.text();
        return response;
    } catch (error) {
        console.error("Erro ao atualizar funcionário:", error);
        throw error;
    }
}

export async function deleteFuncionario(id) {
    const uri = `http://localhost:8080/funcionario/delete/${id}`;

    try {
        const req = await fetch(uri, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.text();
        return response;
    } catch (error) {
        console.error("Erro ao deletar funcionário:", error);
        throw error;
    }
}

// Departamento

export async function createDepartamento(departamento) {
    const uri = `http://localhost:8080/departamento/create`;

    try {
        const req = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(departamento)
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.text();
        return response;
    } catch (error) {
        console.error("Erro ao criar departamento:", error);
        throw error;
    }
}

export async function readDepartamento(id) {
    const uri = `http://localhost:8080/departamento/${id}`;

    try {
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.json();
        return response;
    } catch (error) {
        console.error("Erro ao ler departamento:", error);
        throw error;
    }
}

export async function readAllDepartamentos() {
    const uri = `http://localhost:8080/departamento/all`;

    try {
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.json();
        return response;
    } catch (error) {
        console.error("Erro ao ler todos os departamentos:", error);
        throw error;
    }
}

export async function updateDepartamento(id, departamento) {
    const uri = `http://localhost:8080/departamento/update/${id}`;

    try {
        const req = await fetch(uri, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(departamento)
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.text();
        return response;
    } catch (error) {
        console.error("Erro ao atualizar departamento:", error);
        throw error;
    }
}

export async function deleteDepartamento(id) {
    const uri = `http://localhost:8080/departamento/delete/${id}`;

    try {
        const req = await fetch(uri, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.text();
        return response;
    } catch (error) {
        console.error("Erro ao deletar departamento:", error);
        throw error;
    }
}

// Falhas

export async function createFalha(falha) {
    const uri = `http://localhost:8080/falhas/create`;

    try {
        const req = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(falha)
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.text();
        return response;
    } catch (error) {
        console.error("Erro ao criar a falha:", error);
        throw error;
    }
}

export async function readAllFalhas() {
    const uri = `http://localhost:8080/falhas/all`;

    try {
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }

        const response = await req.json();
        return response;
    } catch (error) {
        console.error("Erro ao ler todas as falhas:", error);
        throw error;
    }
}
