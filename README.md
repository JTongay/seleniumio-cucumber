#Notes on the Cucumber/SeleniumIO stuffs.

#WTF IS CUCUMBER??
- It's a testing framework where you can basically put in plain old english (with certain syntax) and write tests in another framework in conjunction with Cucumber.
- You write out each test (feature) in a .feature file.
- Here's an example

```Cucumber
  Feature: Serve coffee
  Coffee should not be served until paid for
  Coffee should not be served until the button has been pressed
  If there is no coffee left then money should be refunded

Scenario: Buy last coffee
  Given there are 1 coffees left in the machine
  And I have deposited 1$
  When I press the coffee button
  Then I should be served a coffee
```

- This looks like plain english.
