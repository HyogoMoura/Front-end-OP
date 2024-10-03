import { readAllDepartamentos, readAllFuncionario, createFalha } from './controlador.js';

document.addEventListener('DOMContentLoaded', () => {
    const employeeGrid = document.getElementById('employeeGrid');
    
    const renderDepartments = async () => {
        employeeGrid.innerHTML = '';
        const departments = await readAllDepartamentos();
        departments.forEach(dept => {
            const btn = createButton(dept.departamentoNome, 'btn-primary', () => renderEmployees(dept.departamentoId));
            employeeGrid.appendChild(btn);
        });
    };

    const renderEmployees = async (deptId) => {
        employeeGrid.innerHTML = '';
        const employees = await readAllFuncionario();
        employees
            .filter(emp => emp.funcionarioDepartamento.departamentoId === deptId)
            .forEach(emp => {
                const btn = createButton(emp.funcionarioNome, 'btn-success', () => showFailureTypeModal(deptId));
                employeeGrid.appendChild(btn);
            });
        const backBtn = createButton('Voltar', 'btn-secondary', renderDepartments);
        employeeGrid.appendChild(backBtn);
    };

    const showFailureTypeModal = (deptId) => {
        const modal = new bootstrap.Modal(document.getElementById('failureTypeModal'));
        const buttonContainer = document.getElementById('failureTypeButtons');
        buttonContainer.innerHTML = '';

        const failureTypes = ["falha em equipamento", "falta de insumo", "assédio", "falha de pessoal", "acidente"]
        failureTypes.forEach(type => {
            const btn = createButton(type, 'btn-warning', () => reportIncident(type, deptId));
            buttonContainer.appendChild(btn);
        });

        modal.show();
    };

    const reportIncident = async (failure, deptId) => {
        const incidentData = {
            falhaDataOcorrida: new Date().toISOString(),
            falhaDepartamento: { departamentoId: deptId },
            falhaTipo: failure
        };
    
        const modal = bootstrap.Modal.getInstance(document.getElementById('failureTypeModal'));
    
        await createFalha(incidentData);
        alert('Incidente reportado com sucesso!');
    
        modal.hide();
        renderEmployees(deptId);
    };
    
    const createButton = (text, className, onClick) => {
        const btn = document.createElement('button');
        btn.className = `btn ${className} employee-button`;
        btn.textContent = text;
        btn.onclick = onClick;
        return btn;
    };

    renderDepartments();
});