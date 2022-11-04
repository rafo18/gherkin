Feature: Loggin in

    Scenario: Iniciar sesion en la pagina

        Given Im in the page
        When I fill the form with my email and my password
        Then I should see the dashboard page

    @aprobado
    Scenario Outline: Scenario Outline for login
        Given Im in the page
        When I fill the form with my <Email> and my <Password>
        Then I should see the dashboard page

        Examples:
            | Email                        | Password | 
            | rafaelbarreto10@hotmail.com  | Rafo251095  | 
            


