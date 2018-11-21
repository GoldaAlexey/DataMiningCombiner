package evm.dmc.util;

import evm.dmc.rest.annotation.HateoasRelation;
import evm.dmc.rest.annotation.HateoasRelationChildren;
import evm.dmc.webApi.dto.AbstractDto;
import org.apache.commons.lang3.StringUtils;
import org.springframework.hateoas.Link;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * Provides functionality to add relation, child links to the DTOs in
 * accordance to HATEOAS REST API
 *
 * @see evm.dmc.webApi.dto.AbstractDto
 */
public class HateoasUtils {

    /** Name of methods according REST CRUD controller interfaces */
    private static final String GET_INSTANCE_LIST_METHOD_NAME = "getInstanceList";
    private static final String GET_INSTANCE_METHOD_NAME = "getInstance";
    private static final String ADD_INSTANCE_METHOD_NAME = "addInstance";
    private static final String UPDATE_INSTANCE_METHOD_NAME = "updateInstance";
    private static final String DELETE_INSTANCE_METHOD_NAME = "deleteInstance";

    /**
     * adds HATEOAS self, relation and child links to DTO
     * @param dto DTO
     * @param clazz class of called method
     * @param method called method
     * @param accountId Account model identifier
     * @param projectId Project model identifier
     * @return DTO with self link
     */
    public static AbstractDto addBasicLinkSetToDto(
            AbstractDto dto,
            Class<?> clazz,
            Method method,
            Long accountId,
            Long projectId) {

        addSelfLinkToDto(dto, clazz, method, accountId, projectId);
        addCrudRelationLinksToDto(dto, clazz, accountId, projectId);
        addChildLinksToDto(dto, clazz, accountId, projectId);

        return dto;
    }

    /**
     * adds HATEOAS self link to DTO
     * @param dto DTO
     * @param clazz class of called method
     * @param method called method
     * @param accountId Account model identifier
     * @param projectId Project model identifier
     * @return DTO with self link
     */
    public static AbstractDto addSelfLinkToDto(
            AbstractDto dto,
            Class<?> clazz,
            Method method,
            Long accountId,
            Long projectId) {

        Link selfLink = linkTo(clazz, method, accountId, projectId, dto.getDtoId())
                .withSelfRel();
        dto.add(selfLink);
        return dto;
    }

    /**
     * adds HATEOAS relation links to DTO
     * @param dto DTO
     * @param clazz class of called method
     * @param accountId Account model identifier
     * @param projectId Project model identifier
     * @return DTO with self link
     */
    public static AbstractDto addCrudRelationLinksToDto(
            AbstractDto dto,
            Class<?> clazz,
            Long accountId,
            Long projectId) {

        addCreateRelationLinksToDto(dto, clazz, accountId, projectId);
        addReadRelationLinksToDto(dto, clazz, accountId, projectId);
        addUpdateRelationLinksToDto(dto, clazz, accountId, projectId);
        addDeleteRelationLinksToDto(dto, clazz, accountId, projectId);

        return dto;
    }

    private static AbstractDto addRelationLinkToDto(
            AbstractDto dto,
            Class<?> clazz,
            String methodName,
            Object ... params){

        try {
            Method method = getMethodByName(clazz, methodName);
            if (method != null && method.isAnnotationPresent(HateoasRelation.class)) {
                String relationName = getMethodRelationName(method);
                Link link = linkTo(clazz, method, params)
                        .withRel(relationName);
                dto.add(link);
            }
        } catch (Exception ignored) {}

        return dto;
    }

    private static AbstractDto addDeleteRelationLinksToDto(
            AbstractDto dto,
            Class<?> clazz,
            Long accountId,
            Long projectId) {

        Object[] params = getDeleteRestParams(accountId, projectId, dto.getDtoId());

        addRelationLinkToDto(dto, clazz, DELETE_INSTANCE_METHOD_NAME, params);

        return dto;
    }

    private static AbstractDto addUpdateRelationLinksToDto(
            AbstractDto dto,
            Class<?> clazz,
            Long accountId,
            Long projectId) {

        Object[] params = getUpdateRestParams(accountId, projectId);

        addRelationLinkToDto(dto, clazz, UPDATE_INSTANCE_METHOD_NAME, params);

        return dto;
    }

    private static AbstractDto addReadRelationLinksToDto(
            AbstractDto dto,
            Class<?> clazz,
            Long accountId,
            Long projectId) {

        Object[] params = getReadRestParams(accountId, projectId, dto.getDtoId());

        addRelationLinkToDto(dto, clazz, GET_INSTANCE_METHOD_NAME, params);
        addRelationLinkToDto(dto, clazz, GET_INSTANCE_LIST_METHOD_NAME, params);

        return dto;
    }

    private static AbstractDto addCreateRelationLinksToDto(
            AbstractDto dto,
            Class<?> clazz,
            Long accountId,
            Long projectId) {

        Object[] params = getCreateRestParams(accountId, projectId);

        addRelationLinkToDto(dto, clazz, ADD_INSTANCE_METHOD_NAME, params);

        return dto;
    }

    private static Method getMethodByName(Class<?> clazz, String methodName) {
        Method resultMethod = null;
        Method[] methods = clazz.getMethods();
        for (Method method : methods) {
            if (method.getName().equals(methodName)) {
                resultMethod = method;
            }
        }
        return resultMethod;
    }

    /**
     * adds HATEOAS child relation links to DTO
     * @param dto DTO
     * @param clazz class of called method
     * @param accountId Account model identifier
     * @param projectId Project model identifier
     * @return DTO with child relation links
     */
    public static AbstractDto addChildLinksToDto(
            AbstractDto dto,
            Class<?> clazz,
            Long accountId,
            Long projectId) {

        if (clazz.isAnnotationPresent(HateoasRelationChildren.class)) {
            HateoasRelationChildren annotation = clazz.getAnnotation(HateoasRelationChildren.class);
            Class<?>[] childClasses = annotation.value();
            for (Class<?> childClass : childClasses) {
                Method relationMethod = getInstanceListRelationMethod(childClass);
                String relationName = getMethodRelationName(relationMethod);
                if (!StringUtils.isBlank(relationName)){
                    Link link = linkTo(childClass, relationMethod, accountId, projectId)
                            .withRel(relationName);
                    dto.add(link);
                }
            }
        }
        return dto;
    }

    /**
     * gets get instance list method with HATEOAS relation
     * @param clazz class contains get instance list relation name
     * @return name of HATEOAS relation
     */
    private static Method getInstanceListRelationMethod(Class<?> clazz) {

        Method resultMethod = null;
        Method method = getMethodByName(clazz, GET_INSTANCE_LIST_METHOD_NAME);
        if (method.isAnnotationPresent(HateoasRelation.class)) {
            resultMethod = method;
        }

        return resultMethod;
    }

    /**
     * gets HATEOAS relation name of get instance list method
     * @param method method that contains get instance list relation name
     * @return name of HATEOAS relation
     */
    private static String getMethodRelationName(Method method) {

        HateoasRelation annotation = method.getAnnotation(HateoasRelation.class);
        return annotation.value();
    }

    private static Object[] getReadRestParams(Long accountId, Long projectId, Long dtoId) {

        return getDefaultRestParams(accountId, projectId, dtoId);
    }

    private static Object[] getUpdateRestParams(Long accountId, Long projectId) {

        return getSaveRestParams(accountId, projectId);
    }

    private static Object[] getDeleteRestParams(Long accountId, Long projectId, Long dtoId) {

        return getDefaultRestParams(accountId, projectId, dtoId);
    }

    private static Object[] getCreateRestParams(Long accountId, Long projectId) {

        return getSaveRestParams(accountId, projectId);
    }

    private static Object[] getSaveRestParams(Long accountId, Long projectId) {

        List<Object> params = new ArrayList<>();

        if (accountId != null) {
            params.add(accountId);
        }

        if (projectId != null) {
            params.add(projectId);
        }

        return params.toArray();
    }

    private static Object[] getDefaultRestParams(Long accountId, Long projectId, Long dtoId) {

        List<Object> params = new ArrayList<>();

        if (accountId == null) {
            params.add(dtoId);
        }
        else if (projectId == null) {
            params.add(accountId);
        } else {
            params.add(accountId);
            params.add(projectId);
            params.add(dtoId);
        }

        return params.toArray();
    }

}
