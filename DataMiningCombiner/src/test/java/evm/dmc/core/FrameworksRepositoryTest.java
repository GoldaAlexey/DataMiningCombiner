package evm.dmc.core;

import static org.hamcrest.CoreMatchers.hasItems;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.not;
import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Map;
import java.util.Set;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import evm.dmc.weka.WekaFramework;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = DMCCoreConfig.class)
public class FrameworksRepositoryTest {
	@Autowired
	FrameworksRepository repo;

	@Test
	public void testGetFrameworksDescriptors() {
		assertNotNull(repo);
		Set<String> names = repo.getFrameworksDescriptors();
		assertThat(names, not(empty()));
		System.out.println(Arrays.toString(names.toArray()));

		assertThat(names, hasItems("wekaFramework"));
	}

	@Test
	public void testGetFramework() {
		Framework fw = repo.getFramework("wekaFramework");
		assertNotNull(fw);
		assertTrue(fw instanceof WekaFramework);
		System.out.println(fw.getFunctionDescriptors());
		System.out.println(fw.getLoaderDescriptors());
		System.out.println(fw.getSaverDescriptors());
	}

	@Test
	public void testGetFunctionsDescriptors() {
		Map<String, Set<String>> fdescriptors = repo.getFunctionsDescriptors();
		assertThat(fdescriptors.values(), not(empty()));

		System.out.println(TestUtils.printMapCollection(fdescriptors));
	}

	@Test
	public void testGetFunctionsDescriptions() {
		Map<String, String> descriptions = repo
				.getFunctionsDescriptions(repo.getFunctionsDescriptors().values().iterator().next());
		assertThat(descriptions.keySet(), not(empty()));
		assertThat(descriptions.values(), not(empty()));
		for (String desc : descriptions.values())
			assertThat(desc.isEmpty(), is(false));
		System.out.println(TestUtils.printMap(descriptions));
	}

}